document.getElementById("lang-toggle").addEventListener("click", () => {
    const path = window.location.pathname;
    const isEnglish = path.startsWith('/en/');

    let newPath = isEnglish ? path.replace(/^\/en/, '/pl') : path.replace(/^\/pl/, '/en');
    window.location.href = newPath;
});