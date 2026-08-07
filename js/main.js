async function loadComponent(id, file){

    const response = await fetch(file);

    const html = await response.text();

    const container = document.getElementById(id);

    if(container){

        container.innerHTML = html;

    }else{

        console.error("Missing container:", id);

    }

}


document.addEventListener("DOMContentLoaded", function(){

    loadComponent(
        "header",
        "components/header.html"
    );

    loadComponent(
        "hero",
        "components/hero.html"
    );

    loadComponent(
        "product-collection",
        "components/product-collection.html"
    );

    loadComponent(
        "why-rigma",
        "components/why-rigma.html"
    );

    loadComponent(
        "video",
        "components/video.html"
    );

    loadComponent(
        "insights",
        "components/insights.html"
    );

    loadComponent(
        "footer",
        "components/footer.html"
    );

});



document.addEventListener("DOMContentLoaded", function(){


    loadComponent(
        "header",
        "components/header.html"
    );


    loadComponent(
        "hero",
        "components/hero.html"
    );


    loadComponent(
        "product-collection",
        "components/product-collection.html"
    );


    loadComponent(
        "why-rigma",
        "components/why-rigma.html"
    );


    loadComponent(
        "video",
        "components/video.html"
    );


    loadComponent(
        "footer",
        "components/footer.html"
    );


});

loadComponent(
"insights",
"components/insights.html"
);

loadComponent(
"insights",
"components/insights.html"
);