define([
'knockout',
'ojs/ojcontext',
'jquery',
'ojs/ojinputtext',
],
function (ko, Context, $) {
    
    function UserComponentTwoModel(context) {
        var self = this;

        self.composite = context.element;
        self.properties = context.properties;

        self.componentId = self.properties.componentId;
        self.userComponentTwoValue = self.properties.value;
    };

    UserComponentTwoModel.prototype.getValue = function() {
      return this.userComponentTwoValue;
    }

    UserComponentTwoModel.prototype.bindingsApplied = function() {
      this.composite.dispatchEvent(new CustomEvent('bindingsApplied', { bubbles: true, cancelable: false }));
    }

    return UserComponentTwoModel;
});