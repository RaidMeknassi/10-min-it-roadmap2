/* © 10-Minute IT Roadmap. All rights reserved.
   Lab 2: 3D Hardware Teardown. Parts are grouped (Inside the PC / Storage / Peripherals).
   Click a part: it floats to the middle, you can turn it around, and its card explains what it does. */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const GROUPS = [
  { id: "inside", name: "Inside the PC", parts: [
    { id: "motherboard", name: "Motherboard", color: "#22c55e", what: "The main board that connects everything.", facts: ["Every part plugs into it: CPU, RAM, graphics card, storage and power.", "Copper lines on the board carry data and power between the parts.", "Its size and shape (ATX, Micro-ATX, Mini-ITX) decide which case fits."] },
    { id: "cpu", name: "CPU", color: "#2dd4bf", what: "The brain of the computer.", facts: ["It runs the instructions of every program, billions of times per second.", "Its speed is measured in GHz. More cores means more workers at the same time.", "It sits in the CPU socket on the motherboard and gets very hot."] },
    { id: "cooler", name: "CPU Cooler", color: "#60a5fa", what: "Keeps the CPU from overheating.", facts: ["A metal heatsink pulls the heat away from the CPU.", "A fan blows that heat out of the case.", "Without a cooler the CPU would slow down or shut itself off."] },
    { id: "ram", name: "RAM", color: "#a78bfa", what: "The short-term memory.", facts: ["It holds the programs and data you are using right now.", "It is much faster than storage, but it forgets everything when the power goes off.", "More RAM lets you keep more programs open at once."] },
    { id: "gpu", name: "Graphics Card (GPU)", color: "#f472b6", what: "Draws everything you see on the screen.", facts: ["It has its own processor and its own fast memory (VRAM).", "Gamers, video editors and AI work need a strong GPU.", "It plugs into the long PCIe slot on the motherboard."] },
    { id: "psu", name: "Power Supply (PSU)", color: "#f59e0b", what: "Gives power to every part.", facts: ["It changes the AC power from the wall into DC power the parts can use.", "Its power is measured in watts, for example 500 W.", "A weak or failing PSU can cause random shutdowns."] },
    { id: "fan", name: "Case Fan", color: "#38bdf8", what: "Moves air through the case.", facts: ["Front fans pull cool air in, back and top fans push hot air out.", "Good airflow keeps every part cooler and quieter.", "A dusty or stopped fan is a common cause of overheating."] },
    { id: "nic", name: "Network Card (NIC)", color: "#34d399", what: "Connects the computer to a network.", facts: ["It has the Ethernet port where the network cable plugs in.", "Every network card has its own MAC address.", "Many motherboards have one built in; extra cards add faster or more ports."] }
  ] },
  { id: "storage", name: "Storage & Small Parts", parts: [
    { id: "hdd", name: "Hard Disk Drive (HDD)", color: "#94a3b8", what: "Long-term storage with spinning disks.", facts: ["A magnetic disk spins and a small arm reads and writes the data.", "It is cheap for big sizes (1 TB and more) but slower than an SSD.", "It keeps your files even when the power is off."] },
    { id: "ssd", name: "SSD and M.2", color: "#22d3ee", what: "Fast storage with no moving parts.", facts: ["It stores data on flash memory chips, so it is much faster than an HDD.", "M.2 drives are small sticks that plug straight into the motherboard.", "Installing Windows on an SSD makes the whole computer feel faster."] },
    { id: "usb", name: "USB Flash Drive", color: "#fbbf24", what: "Small storage you can carry.", facts: ["It uses flash memory, like an SSD, in a tiny body.", "IT support uses it to move files or to install an operating system.", "Unknown USB sticks can carry malware, so be careful what you plug in."] },
    { id: "sdcard", name: "SD Card", color: "#fb7185", what: "Tiny memory card for cameras and phones.", facts: ["Cameras, drones and some phones store photos and videos on it.", "Laptops often have an SD card reader slot.", "Its speed class tells you how fast it can save video."] },
    { id: "bios", name: "BIOS / UEFI Chip", color: "#a3e635", what: "The first program that runs at power-on.", facts: ["It checks the hardware (POST) and then starts the operating system.", "In its settings you change the boot order or turn on virtualization.", "Modern computers use UEFI, the newer version of BIOS."] },
    { id: "cmos", name: "CMOS Battery", color: "#e879f9", what: "Keeps the BIOS settings and the clock.", facts: ["This coin battery powers the clock when the computer is unplugged.", "A dead CMOS battery makes the date and time reset at every start.", "Removing it for a minute resets the BIOS settings."] }
  ] },
  { id: "outside", name: "Peripherals", parts: [
    { id: "monitor", name: "Monitor", color: "#60a5fa", what: "The screen: the main output device.", facts: ["It shows the picture made by the graphics card.", "It connects with HDMI, DisplayPort or USB-C.", "Resolution (for example 1920x1080) and refresh rate (Hz) describe its quality."] },
    { id: "keyboard", name: "Keyboard and Mouse", color: "#c084fc", what: "The main input devices.", facts: ["You type with the keyboard and point and click with the mouse.", "They connect with USB, a wireless receiver or Bluetooth.", "\"My keyboard does not work\" is a classic help desk ticket: check the cable or battery first."] },
    { id: "webcam", name: "Webcam", color: "#2dd4bf", what: "A camera for video calls.", facts: ["It sends video into the computer, so it is an input device.", "Most webcams also have a microphone.", "If Teams or Zoom cannot see it, check the privacy settings and the driver."] },
    { id: "speakers", name: "Speakers", color: "#f97316", what: "Play the sound from the computer.", facts: ["They are output devices, like the monitor.", "They connect with a 3.5 mm audio jack, USB or Bluetooth.", "No sound? Check the volume, the cable and the default playback device."] },
    { id: "printer", name: "Printer", color: "#f43f5e", what: "Puts documents on paper.", facts: ["Office printers usually connect over the network.", "Paper jams, empty toner and offline printers are very common tickets.", "Restarting the print spooler service fixes many stuck print jobs."] },
    { id: "exthdd", name: "External Hard Drive", color: "#14b8a6", what: "Portable storage for backups.", facts: ["It plugs in with USB and holds a lot of data.", "People use it to back up files or move big folders.", "Keep a backup in a second place too, in case the drive breaks or is lost."] }
  ] }
];
const ALL = []; GROUPS.forEach(g => g.parts.forEach(p => { p.group = g.id; ALL.push(p); }));

/* ---------- scene, renderer and bright, even lighting ---------- */
const stage = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 1.2;
scene.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 1.6));    // soft light from everywhere
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const key = new THREE.DirectionalLight(0xffffff, 2.6); key.position.set(4, 6, 8); scene.add(key);         // main light from the front
const fill = new THREE.DirectionalLight(0xffffff, 1.4); fill.position.set(-6, 2, 5); scene.add(fill);      // fill from the left
const rim = new THREE.DirectionalLight(0xbfd4ff, 1.2); rim.position.set(0, 5, -8); scene.add(rim);         // rim light behind
const camLight = new THREE.PointLight(0xffffff, 18, 0, 2); scene.add(camLight);                           // follows the camera

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.enablePan = false; controls.enabled = false; controls.minDistance = 4; controls.maxDistance = 16;

let narrow = false;
function homeCam() { camera.position.set(0, 0.4, narrow ? 17 : 11.5); controls.target.set(0, 0, 0); }
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; narrow = w / h < 1.1; camera.updateProjectionMatrix();
  if (!selected) homeCam(); layout();
}
new ResizeObserver(resize).observe(stage);

/* ---------- loading (one group at a time) ---------- */
const loader = new GLTFLoader();
const objs = {};            // part id -> THREE.Group
const loading = {};
let group = GROUPS[0], selected = null;
const loadEl = document.getElementById("loading");

function load(p) {
  if (objs[p.id] || loading[p.id]) return loading[p.id];
  loading[p.id] = new Promise(res => {
    loader.load("models/" + p.id + ".glb", gltf => {
      const m = gltf.scene, box = new THREE.Box3().setFromObject(m), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
      m.position.sub(c);
      m.traverse(o => { if (o.isMesh && o.material) { [].concat(o.material).forEach(mt => { if ("envMapIntensity" in mt) mt.envMapIntensity = 1.3; }); } });
      const fit = new THREE.Group(); fit.add(m); fit.scale.setScalar(2.2 / Math.max(size.x, size.y, size.z));
      /* flat parts (boards, chips, cards) lie flat in their files: tilt them up so their face looks at the camera */
      const mx = Math.max(size.x, size.y, size.z);
      if (size.y < 0.35 * mx && size.y <= size.z) fit.rotation.x = Math.PI / 2 - 0.35;
      const holder = new THREE.Group(); holder.add(fit);
      holder.userData = { part: p, phase: Math.random() * 6, s: 0, target: 1, home: new THREE.Vector3() };
      objs[p.id] = holder; scene.add(holder); layout(); res(holder);
    }, undefined, () => { res(null); });
  });
  return loading[p.id];
}
function showGroup(g) {
  group = g; selected = null; closeInfo(true);
  ALL.forEach(p => { const o = objs[p.id]; if (o) o.userData.target = p.group === g.id ? 1 : 0; });
  loadEl.style.display = "grid"; loadEl.textContent = "Loading 3D models...";
  Promise.all(g.parts.map(load)).then(r => { if (group === g) loadEl.style.display = r.some(x => !x) ? "grid" : "none"; if (r.some(x => !x)) loadEl.textContent = "Some 3D models could not load."; });
  layout(); drawTabs();
}
/* grid positions for the parts of the current group */
function layout() {
  const ps = group.parts, n = ps.length, cols = narrow ? Math.min(n, 2) : Math.min(n, n > 6 ? 4 : 3), rows = Math.ceil(n / cols);
  const dx = 3.1, dy = 2.9;
  ps.forEach((p, i) => {
    const o = objs[p.id]; if (!o) return;
    const r = Math.floor(i / cols), inRow = Math.min(cols, n - r * cols), c = i % cols;
    o.userData.home.set((c - (inRow - 1) / 2) * dx, ((rows - 1) / 2 - r) * dy, 0);
  });
  const fitZ = Math.max(rows * dy * 1.55, cols * dx * 1.45 / Math.max(camera.aspect, 0.4));
  if (!selected) { camera.position.z = Math.max(narrow ? 13 : 9.5, fitZ); }
}

/* ---------- picking ---------- */
const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
function hit(e) {
  const r = renderer.domElement.getBoundingClientRect();
  mouse.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(mouse, camera);
  const vis = group.parts.map(p => objs[p.id]).filter(Boolean);
  const h = ray.intersectObjects(vis, true)[0]; if (!h) return null;
  let o = h.object; while (o && !o.userData.part) o = o.parent; return o;
}
let down = null;
renderer.domElement.addEventListener("pointerdown", e => { down = { x: e.clientX, y: e.clientY }; });
renderer.domElement.addEventListener("pointerup", e => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6 || selected) { down = null; return; }
  down = null; const o = hit(e); if (o) select(o.userData.part.id);
});
renderer.domElement.addEventListener("pointermove", e => { renderer.domElement.style.cursor = !selected && hit(e) ? "pointer" : ""; });

/* ---------- info card, tabs and progress ---------- */
const info = document.getElementById("info"), back = document.getElementById("back"), tabs = document.getElementById("tabs"), groupsEl = document.getElementById("groups"), hint = document.getElementById("hint");
let seen = {}; try { seen = JSON.parse(localStorage.getItem("lab2-seen") || "{}"); } catch (e) {}
function progress() {
  const n = ALL.filter(p => seen[p.id]).length, el = document.getElementById("progress");
  el.textContent = "Explored " + n + " of " + ALL.length + (n === ALL.length ? ". Lab complete! 🎉" : "");
}
function drawTabs() {
  groupsEl.innerHTML = "";
  GROUPS.forEach(g => { const b = document.createElement("button"); b.type = "button"; b.textContent = g.name; b.className = g === group ? "on" : ""; b.onclick = () => showGroup(g); groupsEl.appendChild(b); });
  tabs.innerHTML = "";
  group.parts.forEach(p => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = (seen[p.id] ? "✓ " : "") + p.name; b.style.setProperty("--c", p.color);
    if (selected === p.id) b.classList.add("on"); b.onclick = () => select(p.id); tabs.appendChild(b);
  });
}
function select(id) {
  const p = ALL.find(x => x.id === id); if (!p) return;
  if (p.group !== group.id) showGroup(GROUPS.find(g => g.id === p.group));
  load(p).then(() => {
    selected = id;
    group.parts.forEach(q => { const o = objs[q.id]; if (o) o.userData.target = q.id === id ? 1.7 : 0; });
    controls.enabled = true; homeCam(); camera.position.z = narrow ? 14 : 9;
    info.innerHTML = "<h2></h2><p class='what'></p><ul></ul>"; info.style.setProperty("--c", p.color);
    info.querySelector("h2").textContent = p.name; info.querySelector(".what").textContent = p.what;
    p.facts.forEach(f => { const li = document.createElement("li"); li.textContent = f; info.querySelector("ul").appendChild(li); });
    info.classList.add("show"); back.classList.add("show"); hint.textContent = "Drag to rotate. Scroll or pinch to zoom.";
    seen[id] = 1; try { localStorage.setItem("lab2-seen", JSON.stringify(seen)); } catch (e) {}
    progress(); drawTabs();
  });
}
function closeInfo(quiet) {
  selected = null; controls.enabled = false; info.classList.remove("show"); back.classList.remove("show");
  hint.textContent = "Click a part to look closer.";
  if (!quiet) group.parts.forEach(q => { const o = objs[q.id]; if (o) o.userData.target = 1; });
  homeCam(); layout(); drawTabs();
}
back.onclick = () => closeInfo(false);

/* ---------- animation ---------- */
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime, k = 1 - Math.pow(0.001, dt);   // same speed on slow and fast screens
  Object.values(objs).forEach(o => {
    const u = o.userData, sel = selected === u.part.id, mine = u.part.group === group.id;
    if (!mine) u.target = 0;
    u.s += (u.target - u.s) * k; o.scale.setScalar(Math.max(u.s, 1e-4)); o.visible = mine && u.s > 0.02;
    o.position.lerp(sel ? new THREE.Vector3(0, 0, 0) : u.home, k);
    if (sel) o.rotation.x += (0 - o.rotation.x) * 0.1;
    else { o.position.y += Math.sin(t * 1.4 + u.phase) * 0.004; o.rotation.y += 0.006; o.rotation.x = Math.sin(t * 0.7 + u.phase) * 0.08; }
  });
  controls.update(); camLight.position.copy(camera.position);
  renderer.render(scene, camera);
});

resize(); progress(); showGroup(GROUPS[0]);
window.__lab2 = { select, ready: () => group.parts.every(p => objs[p.id]), parts: ALL.map(p => p.id) };
