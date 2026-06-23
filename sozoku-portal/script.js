/* ============================================================
   終活・相続サポートセンター — script.js
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 免責事項アコーディオン ---------- */
  function initDisclaimer() {
    var toggle  = document.getElementById("disclaimerToggle");
    var content = document.getElementById("disclaimerContent");
    var arrow   = document.getElementById("disclaimerArrow");

    if (!toggle || !content || !arrow) return;

    toggle.addEventListener("click", function () {
      var isOpen = content.classList.contains("is-open");

      if (isOpen) {
        content.classList.remove("is-open");
        content.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        arrow.classList.remove("open");
      } else {
        content.classList.add("is-open");
        content.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
        arrow.classList.add("open");

        /* 開いたときにスクロールして見やすく */
        setTimeout(function () {
          content.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
      }
    });

    /* Enterキーでもトグル可能（button要素のためデフォルト動作） */
  }

  /* ---------- カードのフェードイン（IntersectionObserver） ---------- */
  function initCardFadeIn() {
    if (!("IntersectionObserver" in window)) return;

    var cards = document.querySelectorAll(".card, .line-card, .about-card");

    /* CSS側で初期状態を設定 */
    cards.forEach(function (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            /* 少しずつずらして表示 */
            setTimeout(function () {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  /* ---------- 未設定リンクの処理（後日設定リンクを無効化） ---------- */
  function initPlaceholderLinks() {
    var links = document.querySelectorAll('a[href="#"]');
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        /* ボタン以外のナビリンクは止める */
        if (link.classList.contains("btn")) {
          e.preventDefault();
          /* 任意: 準備中のメッセージ表示 */
        }
      });
    });
  }

  /* ---------- 初期化 ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initDisclaimer();
    initCardFadeIn();
    initPlaceholderLinks();
  });

})();
