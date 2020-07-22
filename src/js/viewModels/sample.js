define([
'ojs/ojcontext',
'knockout',
'jquery',
'ojs/ojarraydataprovider',
'ojs/ojcontext',
'ojs/ojbutton',
'user-component-one/loader',
'user-component-two/loader'
],
function (context, ko, $, adp, ctx) {

    function SampleViewModel() {

        const self = this;
        self.dataprovider = ko.observableArray();

        self.display = function() {
            const components = [
                { id: 'comp_1', component: 'one', value: 'JET' },
                { id: 'comp_2', component: 'two', value: 'CCA' },
                { id: 'comp_3', component: 'one', value: 'BusyContext' },
                { id: 'comp_4', component: 'two', value: 'Demo' }
            ];
            const busyContextPromises = [];
            self.dataprovider(components);
            for (const comp of components) {
                const node = document.getElementById(comp.id);
                let busyContext = context.getContext(node).getBusyContext();
                busyContextPromises.push(busyContext.whenReady());

                // Uncomment below lines to reproduce error
                // const compid = `#${comp.id}`;
                // console.log($(compid)[0].getValue());
            }
            Promise.all(busyContextPromises).then(function() {
                for (const comp of components) {
                    const compid = `#${comp.id}`;
                    console.log($(compid)[0].getValue());
                }
            });
        }
    }

    return SampleViewModel;

});
