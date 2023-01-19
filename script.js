    {
        // ENABLE ALL MENU BUTTONS

        document.querySelectorAll(".company-card").forEach(multiAction => {
const menuButton = multiAction.querySelector(".company--button--menu");
const list = multiAction.querySelector(".company--list");


menuButton.addEventListener('click', () => {
list.classList.toggle("company--list--visible")
});

        });
        // HIDE ALL LISTS WHEN CLICKING ELSEWHERE ON THE PAGE
        document.addEventListener('click', e => {
            const keepOpen = (
                e.target.matches(".company--list")
                || e.target.matches(".company--button--menu")
                || e.target.closest(".company--button--menu")
            );
            if (keepOpen) return;
            document.querySelectorAll(".company--list").forEach(list => {
                list.classList.remove("company--list--visible");
            });
        });
    }


    
    {
        // ENABLE ALL MENU BUTTONS

    document.querySelectorAll('.features-card').forEach(multiAction => {
      const featuresMenu =  document.querySelector('.features--menu');
      const featuresList = document.querySelector('.features-list');
    

    featuresMenu.addEventListener('click', () => {
featuresList.classList.toggle('features-list-visible');
    
});

        });

 // HIDE ALL LISTS WHEN CLICKING ELSEWHERE ON THE PAGE
        document.addEventListener('click', e => {
            const keepOpen = (
                e.target.matches(".features-list")
                || e.target.matches(".features--menu")
                || e.target.closest(".features--menu")
            );
            if (keepOpen) return;
            document.querySelectorAll(".features-list").forEach(list => {
                list.classList.remove("features-list-visible");
            });
        });
        
}