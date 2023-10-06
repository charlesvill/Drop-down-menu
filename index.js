// core elements: variables storing element Ids && classlist toggles for stylesheet
// note: make sure to replace the class names if they dont match the ones here!
// note: if arrow is not used, make sure to delete parameters and variables

export default function dropdownMenu(btnCN, menuCN, arrowCN){
    const dropDownBtn = document.getElementById(btnCN);
    const dropDownMenu = document.getElementById(menuCN);
    const toggleArrow = document.getElementById(arrowCN);

    const toggleDropdown = function () {
        dropDownMenu.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
    }

    dropDownBtn.addEventListener("click", function(e){
        e.stopPropagation();
        toggleDropdown();
    })

    document.documentElement.addEventListener("click", function() {
        if (dropDownMenu.classList.contains("show")){
            toggleDropdown();
        }
    })
}
