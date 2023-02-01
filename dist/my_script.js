var toggle = true

function showMessage () {

    if (toggle == true) {
    document.getElementById('txt').innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore distinctio recusandae vitae eius nam non veritatis ipsam sunt libero sed ex facere? Culpa itaque consectetur voluptate exercitationem totam eligendi!'
    document.getElementById('txt').style.padding='15px 0 0 0'
    document.getElementById('ul').style.background='white';
    document.getElementById('ul').style.border='0.2px solid #D3D3D3';
    document.getElementById('ul').style.boxShadow='3px 2px 2px #D3D3D3';
    document.getElementById('ul-symbol').className='fa fa-minus';
    document.getElementById('ul-symbol').style.alignSelf='start';
    document.getElementById('ul-symbol').style.padding='15px 0 0 15px';
    

    }
    else {
    document.getElementById('txt').innerHTML='';
    document.getElementById('txt').style.padding=''
    document.getElementById('ul').style.background='#F2F2F7';
    document.getElementById('ul-symbol').className='fa fa-plus'
    document.getElementById('ul').style.border='none';
    document.getElementById('ul').style.boxShadow='none';
    }
    toggle = !toggle;
    
}

function showMessage1 () {

    if (toggle == true) {
    document.getElementById('txt1').innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore distinctio recusandae vitae eius nam non veritatis ipsam sunt libero sed ex facere? Culpa itaque consectetur voluptate exercitationem totam eligendi!'
    document.getElementById('txt1').style.padding='15px 0 0 0'
    document.getElementById('ul1').style.background='white';
    document.getElementById('ul1').style.border='0.2px solid #D3D3D3';
    document.getElementById('ul1').style.boxShadow='3px 2px 2px #D3D3D3';
    document.getElementById('ul-symbol1').className='fa fa-minus';
    document.getElementById('ul-symbol1').style.alignSelf='start';
    document.getElementById('ul-symbol1').style.padding='15px 0 0 15px';
    

    }
    else {
    document.getElementById('txt1').innerHTML='';
    document.getElementById('txt1').style.padding=''
    document.getElementById('ul1').style.background='#F2F2F7';
    document.getElementById('ul-symbol1').className='fa fa-plus'
    document.getElementById('ul1').style.border='none';
    document.getElementById('ul1').style.boxShadow='none';
    }
    toggle = !toggle;
    
}

function showMessage2 () {

    if (toggle == true) {
    document.getElementById('txt2').innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore distinctio recusandae vitae eius nam non veritatis ipsam sunt libero sed ex facere? Culpa itaque consectetur voluptate exercitationem totam eligendi!'
    document.getElementById('txt2').style.padding='15px 0 0 0'
    document.getElementById('ul2').style.background='white';
    document.getElementById('ul2').style.border='0.2px solid #D3D3D3';
    document.getElementById('ul2').style.boxShadow='3px 2px 2px #D3D3D3';
    document.getElementById('ul-symbol2').className='fa fa-minus';
    document.getElementById('ul-symbol2').style.alignSelf='start';
    document.getElementById('ul-symbol2').style.padding='15px 0 0 15px';
    

    }
    else {
    document.getElementById('txt2').innerHTML='';
    document.getElementById('txt2').style.padding=''
    document.getElementById('ul2').style.background='#F2F2F7';
    document.getElementById('ul-symbol2').className='fa fa-plus'
    document.getElementById('ul2').style.border='none';
    document.getElementById('ul2').style.boxShadow='none';
    }
    toggle = !toggle;
    
}
function showMessage3 () {

    if (toggle == true) {
    document.getElementById('txt3').innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore distinctio recusandae vitae eius nam non veritatis ipsam sunt libero sed ex facere? Culpa itaque consectetur voluptate exercitationem totam eligendi!'
    document.getElementById('txt3').style.padding='15px 0 0 0'
    document.getElementById('ul3').style.background='white';
    document.getElementById('ul3').style.border='0.2px solid #D3D3D3';
    document.getElementById('ul3').style.boxShadow='3px 2px 2px #D3D3D3';
    document.getElementById('ul-symbol3').className='fa fa-minus';
    document.getElementById('ul-symbol3').style.alignSelf='start';
    document.getElementById('ul-symbol3').style.padding='15px 0 0 15px';
    

    }
    else {
    document.getElementById('txt3').innerHTML='';
    document.getElementById('txt3').style.padding=''
    document.getElementById('ul3').style.background='#F2F2F7';
    document.getElementById('ul-symbol3').className='fa fa-plus'
    document.getElementById('ul3').style.border='none';
    document.getElementById('ul3').style.boxShadow='none';
    }
    toggle = !toggle;
    
}
function showMessage4 () {

    if (toggle == true) {
    document.getElementById('txt4').innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, labore distinctio recusandae vitae eius nam non veritatis ipsam sunt libero sed ex facere? Culpa itaque consectetur voluptate exercitationem totam eligendi!'
    document.getElementById('txt4').style.padding='15px 0 0 0'
    document.getElementById('ul4').style.background='white';
    document.getElementById('ul4').style.border='0.2px solid #D3D3D3';
    document.getElementById('ul4').style.boxShadow='3px 2px 2px #D3D3D3';
    document.getElementById('ul-symbol4').className='fa fa-minus';
    document.getElementById('ul-symbol4').style.alignSelf='start';
    document.getElementById('ul-symbol4').style.padding='15px 0 0 15px';
    

    }
    else {
    document.getElementById('txt4').innerHTML='';
    document.getElementById('txt4').style.padding=''
    document.getElementById('ul4').style.background='#F2F2F7';
    document.getElementById('ul-symbol4').className='fa fa-plus'
    document.getElementById('ul4').style.border='none';
    document.getElementById('ul4').style.boxShadow='none';
    }
    toggle = !toggle;
    
}

function showBurgermenu() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}