const sun = document.getElementById('sun');

    const grayClouds = document.getElementById("gray-clouds");
    const whiteClouds = document.getElementById("white-clouds");

    const bird1 = document.getElementById("bird1");
    const bird2 = document.getElementById("bird2");
    const bird3 = document.getElementById("bird3");

    const mountain0 = document.getElementById("mountain0");
    const mountain1 = document.getElementById("mountain1");
    const mountain2 = document.getElementById("mountain2");
    const mountain3 = document.getElementById("mountain3");
    const mountain4 = document.getElementById("mountain4");
    const mountain5 = document.getElementById("mountain5");
    const mountain6 = document.getElementById("mountain6");
    const mountain7 = document.getElementById("mountain7");

    let clientWidth = document.documentElement.clientWidth;

    //모바일기기에서 parallax scrolling 안되게
    window.addEventListener('scroll', () => {
        if (clientWidth > 800) {
            const scrollY = window.scrollY;
 
            sun.style.transform = `translateY(${scrollY * 1.05}px)`;
            
            grayClouds.style.transform = `translateX(${scrollY * 0.125}px)`;
            whiteClouds.style.transform = `translateX(${scrollY * -0.125}px)`;
        
            bird1.style.transform = `translateX(${scrollY}px)`;
            bird2.style.transform = `translateX(-${scrollY * 3.5}px)`;
            bird3.style.transform = `translateX(-${scrollY * 0.5}px)`;
        
            mountain0.style.transform = `translateY(${scrollY * 0.95}px)`; /* 가장 멀리있는 요소는 스크롤 속도랑 비슷하게하면 멀리있는것처럼 천천히 움직 */
            mountain1.style.transform = `translateY(${scrollY * 0.93}px)`;
            mountain2.style.transform = `translateY(${scrollY * 0.9}px)`;
            mountain3.style.transform = `translateY(${scrollY * 0.8}px)`;
            mountain4.style.transform = `translateY(${scrollY * 0.7}px)`;
            mountain5.style.transform = `translateY(${scrollY * 0.6}px)`;
            mountain6.style.transform = `translateY(${scrollY * 0.3}px)`;
            mountain7.style.transform = `translateY(${scrollY * 0.1}px)`;/* 가까운 요소가 뒤에 있는 요소 덮게 */
            }
    });

    document.querySelectorAll("#right-buttons .button-in-header").forEach((element) => {
        element.addEventListener("click", (event) => {
            document.getElementById("active-menu").removeAttribute("id");
        
            element.setAttribute("id", "active-menu");
        })
    });

    // 클릭하면 이동
    const link = document.querySelector('a[href="#document-title"]');

    link.addEventListener("click", () => {
        event.preventDefault()

        document.querySelector('#document-title').scrollIntoView({
            behavior: "smooth"
        })
    });

    window.addEventListener("resize", () => {
        clientWidth = document.documentElement.clientWidth
    
        if(clientWidth < 800) {
            sun.style.transform = `translateY(0px)`;
            
            grayClouds.style.transform = `translateX((0px)`;
            whiteClouds.style.transform = `translateX((0px)`;
        
            bird1.style.transform = `translateX(0px)`;
            bird2.style.transform = `translateX(0px)`;
            bird3.style.transform = `translateX(0px)`;
        
            mountain0.style.transform = `translateY(0px)`; 
            mountain1.style.transform = `translateY(0px)`;
            mountain2.style.transform = `translateY(0px)`;
            mountain3.style.transform = `translateY(0px)`;
            mountain4.style.transform = `translateY(0px)`;
            mountain5.style.transform = `translateY(0px)`;
            mountain6.style.transform = `translateY(0px)`;
            mountain7.style.transform = `translateY(0px)`;
        }
    }) // 데스크탑에서 화면을 줄였을때