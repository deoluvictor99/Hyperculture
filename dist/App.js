const ul = document.querySelector('ul');
const allNavLinks = document.querySelectorAll('li');
const ionIcon = document.querySelector('ion-icon');

const menu = (e) => {

    e.name === "menu-outline"?
            ((e.name = "close-outline"),
            ul.classList.remove("hidden"),
            ul.classList.add("sm:absolute"),
            ul.classList.add("sm:top-[82.5px]"),
            ul.classList.add("sm:left-0"),
            ul.classList.add("sm:flex-col"),
            ul.classList.add("sm:bg-white"),
            ul.classList.add("sm:px-[1.5rem]"),
            ul.classList.add("sm:w-[100%]")
        ):
            ((e.name = "menu-outline"),
            ul.classList.add("hidden")
        );

}


function scrollToSection(event) {
  // hide dropdown on smaller screens after clicking
    ul.classList.add("hidden");

    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    let targetPosition = targetElement.getBoundingClientRect().top;
    const headerHeight = document.querySelector("nav").offsetHeight;

    const finalScrollPosition = targetPosition + window.scrollY - headerHeight;
        window.scroll({
        top: finalScrollPosition,
        behavior: "smooth",
        });
}

    allNavLinks.forEach((link) => {
        
        link.addEventListener("click", scrollToSection);
        link.addEventListener("click", () => {
            ionIcon.setAttribute('name', 'menu-outline')
        })
        ul.classList.add("hidden");
    });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const currentClasses = entry.target.classList;
            const newClasses = [];

            for (const classname of currentClasses) {
                if (classname.startsWith("__")) {
                    newClasses.push(`animate${classname}`);
                }
            }

            entry.target.classList.add(...newClasses);
        }
    });
},
{ threshold: 0.5 }
);

const elements = document.querySelectorAll(".animate__animated");

elements.forEach((el) => observer.observe(el));