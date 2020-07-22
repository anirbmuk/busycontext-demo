define([
'knockout',
'ojs/ojcontext',
'jquery',
'ojs/ojinputtext',
],
function (ko, Context, $) {
    
    function UserComponentOneModel(context) {
        var self = this;

        self.composite = context.element;
        self.properties = context.properties;

        self.componentId = self.properties.componentId;
        self.userComponentOneValue = self.properties.value;
    };

    UserComponentOneModel.prototype.getValue = function() {
      return this.userComponentOneValue;
    }

    return UserComponentOneModel;
});