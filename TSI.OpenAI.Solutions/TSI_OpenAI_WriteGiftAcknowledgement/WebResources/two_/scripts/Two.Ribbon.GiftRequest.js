// Namespace Two.Ribbon.Request
var Two = window.Two || {};
Two.Ribbon = {};

Two.Ribbon.GiftRequest = function () {
    
    
    function openGiftAcknowledgementOpenAIPage(data){
        let pageInput = { 
            pageType: "custom", 
            name: "two_generategiftacknowledgement_4d7bc", 
            selectedGiftId:data,
            //recordId IS A RESERVED PARAMETER. PUT THE RELEVANT DATA IN HERE
            //IF ITS A SINGLE ID, STRIP THE CURLY BRACKETS
            recordId: data[0].replace(/[{}]/g, ""),
        };
        let navigationOptions = {
            target: 2, 
            position: 2,
            height:500,
            width: {value: 1000, unit:"px"},
            title: "Write a Gift Acknowledgement"
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Called when the dialog closes
                    //formContext.getControl("Timeline").refresh();
                }
            ).catch(
                function (error) {
                    // Handle error
                    console.error(error);
                }
            );
    }
    
    
    return {
        AcknowlegeGift: openGiftAcknowledgementOpenAIPage
    };
}();