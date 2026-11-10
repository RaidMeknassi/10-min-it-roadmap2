/* Certifications page */
(function () {
  var grid = document.getElementById("certs-grid"); if (!grid) return;
  CERTS.forEach(function (c) {
    var card = document.createElement("div"); card.className = "cert-card"; card.style.setProperty("--c", c.color);
    card.innerHTML = '<span class="badge"></span><h3></h3><ul></ul>';
    card.querySelector(".badge").textContent = c.stage; card.querySelector("h3").textContent = c.title;
    var ul = card.querySelector("ul"); c.items.forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
    grid.appendChild(card);
  });
})();
