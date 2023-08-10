const menu = (e) => {
    const ul = document.querySelector('ul');
    const button = document.querySelector('button');
    console.log(button);

    e.name === "menu-outline"? 
        (e.name = "close-outline",
            ul.classList.remove("sm:hidden"),
            ul.classList.add("sm:absolute"),
            ul.classList.add("sm:top-[82.5px]"),
            ul.classList.add("sm:left-0"),
            ul.classList.add("sm:flex-col"),
            ul.classList.add("sm:bg-white"),
            ul.classList.add("sm:px-[1.5rem]"),
            ul.classList.add("sm:w-[100%]")
        ):
        (e.name ="menu-outline", 
            ul.classList.add("sm:hidden")
        )

}