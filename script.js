
    // Array -is varianti
    const stringArray = [
        "sit1",
        "sit2",
        "groundsit",
        "sitonchair",
        "rob",
        "bomb",
        "tpda",
        "handsup",
        "cuffed_front",
        "cuffed_back",
        "onknee",
        "pray",
        "eat",
        "drink",
    ];
    // ========================

    // Stringis varianti
    let stringData = 'drink,eat,pray';
    let convertedString = stringData.split(',')
    // =================

    function findStringsContainingCharacters(arr, characters) {
        const result = arr.filter((str) => {
            return characters.every((char) => str.includes(char));
        });
        return result;
    }

    let charactersToFind = []; // Characters to search for
    let foundStrings = findStringsContainingCharacters(stringArray, charactersToFind);

    let alphabet = [...'abcdefghijklmnopqrstuvwxyz0123456789'];

    function takeInput(event){;

        if ($('#searchInput').val().length < 1) {
            charactersToFind = [];
            $('.results').empty();
        }

        if (event.code == 'Backspace') {

            charactersToFind.pop();

        } else if(alphabet.includes(event.key)){

            let char = $('#searchInput').val();
            let charToPush = char.substr(char.length - 1);

            charactersToFind.push(charToPush);
            char = '';
        }
        displayAnimations();
    }

    function displayAnimations(){
        $('.results').empty();
        let foundStrings = findStringsContainingCharacters(stringArray, charactersToFind);
        foundStrings.forEach(element => {
            $('.results').append(`
                <p style="cursor: pointer" onclick="toggleAnimation('${element}')">${element}</p>
            `)
        });
    }

    function toggleAnimation(animation) {
        console.log(animation);
    }

    $('#closeAnimationTab').on('click',()=>{
        $('.animation-div').toggleClass('d-none')
    });