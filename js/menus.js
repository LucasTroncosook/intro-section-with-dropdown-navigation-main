const feature = document.getElementById('feature');
const company= document.getElementById('company');
const menu = document.getElementById('menu');
const menuDesplegableOpen = document.querySelector('.menu-desplegable');

const menuFeature = ()=>{
    const img = feature.nextElementSibling;
    const featureMenu = img.nextElementSibling;
    console.log(featureMenu)

    const arrowStatus = img.getAttribute('src');
    if(arrowStatus === './images/icon-arrow-down.svg'){
        img.setAttribute('src', './images/icon-arrow-up.svg');
        featureMenu.style.display = "block"
    }else{
        img.setAttribute('src', './images/icon-arrow-down.svg')
        featureMenu.style.display = "none"
    }
}

const menuCompany = ()=>{
    const img = company.nextElementSibling;
    const companyMenu = img.nextElementSibling;

    const arrowStatus = img.getAttribute('src');
    console.log(arrowStatus);
    if(arrowStatus === './images/icon-arrow-down.svg'){
        img.setAttribute('src', './images/icon-arrow-up.svg');
        companyMenu.style.display="block";
    }else{
        img.setAttribute('src', './images/icon-arrow-down.svg');
        companyMenu.style.display="none";
    }
}

const menuDesplegable = ()=>{
    const img = menu.firstElementChild;
    const imgSrc = img.getAttribute('src');
    const opacity = menuDesplegableOpen.nextElementSibling;
    
    const featureNav = document.getElementById('feature-nav');
    const actionNavFeature = featureNav.firstElementChild;
    const featureDesplegable = featureNav.querySelector('.feature-desplegable');

    const nextSpan = featureNav.nextElementSibling;
    const actionCompany = nextSpan.firstElementChild 
    const companyDesplegable = nextSpan.querySelector('.company-desplegable');
    if(imgSrc === './images/icon-menu.svg'){
        img.setAttribute('src', './images/icon-close-menu.svg');
        menuDesplegableOpen.style.transform ='translateX(0%)';
        opacity.style.display="block";
    }else{
        img.setAttribute('src', './images/icon-menu.svg');
        menuDesplegableOpen.style.transform ='translateX(100%)';
        opacity.style.display="none";
    }

    const openFeature = ()=>{
        const img = actionNavFeature.nextElementSibling;
        const imgSrc = img.getAttribute('src');
        if(imgSrc === './images/icon-arrow-down.svg'){
            img.setAttribute('src', './images/icon-arrow-up.svg')
            featureDesplegable.style.display="block";
        }else{
            img.setAttribute('src', './images/icon-arrow-down.svg')
            featureDesplegable.style.display="none";
        }
    }

    const openCompany = ()=>{
        const img = actionCompany.nextElementSibling;
        const imgSrc = img.getAttribute('src');
        if(imgSrc === './images/icon-arrow-down.svg'){
            img.setAttribute('src', './images/icon-arrow-up.svg')
            companyDesplegable.style.display="block";
        }else{
            img.setAttribute('src', './images/icon-arrow-down.svg')
            companyDesplegable.style.display="none";
        }
    }

    actionNavFeature.addEventListener('click', openFeature);
    actionCompany.addEventListener('click', openCompany)
}

menu.addEventListener('click', menuDesplegable);
feature.addEventListener('click', menuFeature);
company.addEventListener('click', menuCompany);