(function () {
    let rangeNode = document.querySelector('.js-iframe-width-range');
    let frameNode = document.querySelector('.js-iframe');
    let initRangeValue = parseInt(rangeNode.getAttribute('max'), 10);
    setIframeWidth(initRangeValue);

    rangeNode.addEventListener('input', function (event) {
        let rangeValue = event.target.value;
        setIframeWidth(rangeValue);
    });

    function setIframeWidth(rangeValue) {
        frameNode.style.setProperty('--iframe-width-diff', rangeValue + 'px');
    }
}());
