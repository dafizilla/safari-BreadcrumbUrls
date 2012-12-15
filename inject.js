function handleLoadFocus(event) {
    safari.self.tab.dispatchMessage("updateBreadCrumbs", null);
}

window.addEventListener("load", handleLoadFocus, false);
window.addEventListener("focus", handleLoadFocus, false);
