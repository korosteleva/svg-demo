(function () {
    window.navigation = function(examples, currentIndexExample) {
        let examplesCount = examples.length;

        let frameNode = document.querySelector('.js-iframe');
        let navigationNode = document.querySelector('.js-navigation');

        frameNode.setAttribute('src', examples[currentIndexExample]);

        navigationNode.addEventListener('click', function (event) {
            let navDirection;
            let clickedElement;
            if (event.target.classList.contains('.controls-button')) {
                clickedElement = event.target;
            } else if (event.target.closest('.controls-button')) {
                clickedElement = event.target.closest('.controls-button');
            }

            if (!clickedElement) {
                return;
            }

            navDirection = clickedElement.dataset['nav'];

            switch (navDirection) {
                case 'prev':
                    if (currentIndexExample === 0) {
                        currentIndexExample = examplesCount - 1;
                    } else {
                        currentIndexExample -= 1;
                    }
                    break;

                case 'next':
                    if (currentIndexExample === examplesCount - 1) {
                        currentIndexExample = 0;
                    } else {
                        currentIndexExample += 1;
                    }
                    break;

            }

            frameNode.setAttribute('src', examples[currentIndexExample]);
        });
    }
}());