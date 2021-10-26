function dosearch() {
    var sf=document.searchform;
    var submitto = sf.sengines.options[sf.sengines.selectedIndex].value + sf.searchterms.value;
    window.location.href = submitto;
    return false;
    }