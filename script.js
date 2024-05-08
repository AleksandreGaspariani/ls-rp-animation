
    // // Array -is varianti
    // const stringArray = [
    //     "sit1",
    //     "sit2",
    //     "groundsit",
    //     "sitonchair",
    //     "rob",
    //     "bomb",
    //     "tpda",
    //     "handsup",
    //     "cuffed_front",
    //     "cuffed_back",
    //     "onknee",
    //     "pray",
    //     "eat",
    //     "drink",
    // ];
    // // ========================

    // // Stringis varianti
    // let stringData = 'drink,eat,pray';
    // let convertedString = stringData.split(',')
    // // =================

    let jsonData = [
        {
            "Name": "sit",
            "Count": 4
        },
        {
            "Name": "lay",
            "Count": 1
        },
        {
            "Name": "groundsit",
            "Count": 3
        }
    ];

    let collectedData = [];

    let dataAsString = JSON.stringify(jsonData);

    getAnimationList(dataAsString)

    function getAnimationList(data){
        const obj = JSON.parse(data);
        collectedData = [];
        
        for (let index = 0; index < obj.length; index++) {
            let objAnim = obj[index]['Name'];
            let objAnimVariation = obj[index]['Count'];

            if (objAnimVariation > 1) {
                for(let j = 1; j <= objAnimVariation; j++){
                    collectedData.push(objAnim+''+j);
                }
            }else if (objAnimVariation == 0 || objAnimVariation == 1) {
                collectedData.push(objAnim);
            } else {
                collectedData.push(objAnim+''+objAnimVariation);
            }
        }

    }    

    function findStringsContainingCharacters(arr, characters) {
        const result = arr.filter((str) => {
            return characters.every((char) => str.includes(char));
        });
        return result;
    }

    let charactersToFind = []; // Characters to search for
    let foundStrings = findStringsContainingCharacters(jsonData, charactersToFind);

    let alphabet = [...'abcdefghijklmnopqrstuvwxyz0123456789'];

    function takeInput(event){

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
        let foundStrings = findStringsContainingCharacters(collectedData, charactersToFind);
        foundStrings.forEach(element => {
            $('.results').append(`
                <p style="cursor: pointer" onclick="toggleAnimation('${element}')">${element}</p>
            `)
        });
    }

    function toggleAnimation(animation) {
        console.log(animation);
        mp.trigger('requestAnimAction', animation);
    }

    function receiveDataAsString(data) {
        getAnimationList(data)
    }

    function toggleAnimWindow() {
        $('.animation-div').toggleClass('d-none');
    }

    $('#closeAnimationTab').on('click',()=>{
        $('.animation-div').toggleClass('d-none');
        mp.trigger('closeAnims', false);
    });

    toggleAnimWindow();