function dosearch() {
    var sf=document.searchform;
    var submitto = sf.sengines.options[sf.sengines.selectedIndex].value + escape(sf.searchterms.value);
    window.location.href = submitto;
    return false;
    }