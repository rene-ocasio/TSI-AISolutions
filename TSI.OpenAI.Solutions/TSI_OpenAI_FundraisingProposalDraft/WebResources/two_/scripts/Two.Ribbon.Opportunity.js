// Namespace Two.Ribbon.Opportunity
var Two = window.Two || {};
Two.Ribbon = {};

Two.Ribbon.Opportunity = function () {
    
    function refreshTimeline (exeContext) {
        var _formContext = exeContext.getFormContext();
        _formContext.getControl("Timeline").refresh();
    }
    
    function openWriteProposalOpenAIPage(executionContext){
        var formContext = executionContext; // get the form Context
        let pageInput = { 
            pageType: "custom", 
            name: "two_writeproposal_5b3b6", 
            entityName: formContext.data.entity.getEntityName(), 
            recordId: formContext.data.entity.getId().replace('{','').replace('}','') //removing brackets
        };
        let navigationOptions = {
            target: 2, 
            position: 2,
            height:500,
            width: {value: 500, unit:"px"},
            title: "Generate Fundraising Proposal"
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Called when the dialog closes
                    formContext.getControl("Timeline").refresh();
                }
            ).catch(
                function (error) {
                    // Handle error
                    console.error(error);
                }
            );
    }
    
    
    return {
        OpenWriteProposalPage: openWriteProposalOpenAIPage
    };
}();