/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./user-component-two-view.html', './user-component-two-model', 'text!./component.json', 'css!./user-component-two-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('user-component-two', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);