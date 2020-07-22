/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./user-component-one-view.html', './user-component-one-model', 'text!./component.json', 'css!./user-component-one-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('user-component-one', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);