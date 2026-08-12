(function () {
    "use strict";

    function makeRootRelative(fragment) {
        fragment.querySelectorAll("a[href]").forEach(function (link) {
            var href = link.getAttribute("href");
            if (!href || href === "#" || href.charAt(0) === "/" || /^(https?:|mailto:|tel:)/i.test(href)) return;
            link.setAttribute("href", "/" + href.replace(/^\.\//, ""));
        });
        fragment.querySelectorAll("img[src]").forEach(function (image) {
            var src = image.getAttribute("src");
            if (!src || src.charAt(0) === "/" || /^(https?:|data:)/i.test(src)) return;
            image.setAttribute("src", "/" + src.replace(/^\.\//, ""));
        });
    }

    async function loadComponent(targetId, componentPath) {
        var target = document.getElementById(targetId);
        if (!target) return;
        try {
            var response = await fetch(componentPath, { cache: "no-cache" });
            if (!response.ok) throw new Error("Unable to load " + componentPath);
            target.innerHTML = await response.text();
            makeRootRelative(target);
        } catch (error) {
            console.error(error);
        }
    }

    Promise.all([
        loadComponent("header", "/components/header.html"),
        loadComponent("footer", "/components/footer.html")
    ]);
}());
