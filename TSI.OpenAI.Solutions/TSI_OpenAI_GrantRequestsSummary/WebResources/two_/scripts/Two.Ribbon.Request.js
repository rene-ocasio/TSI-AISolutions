// Namespace Two.Ribbon.Request
var Two = window.Two || {};
Two.Ribbon = {};

Two.Ribbon.Request = function () {
    
    
    function openSummarizeRequestsOpenAIPage(data){
        var selectedRecordIDs = data;
        let pageInput = { 
            pageType: "custom", 
            name: "two_grantrequestssummaryfordocket_bfa76", 
            recordId: selectedRecordIDs
        };
        let navigationOptions = {
            target: 2, 
            position: 2,
            height:500,
            width: {value: 1000, unit:"px"},
            title: "Summarize Grant Requests"
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
        SummarizeRequests: openSummarizeRequestsOpenAIPage
    };
}();