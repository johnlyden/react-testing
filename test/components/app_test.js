import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/** core parts of a test */
// Use 'describe' to group together similar tests
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  // I am testing something very speciific
  // This is what i'm testing about 'App'
  it('shows the correct text', () => {
  

    // create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target(App)
    // simple direct assertion about our target

    // expect(component).to.have.class('comment-box')
    expect(component).to.contain('React simple starter');

  })
  
}); // can pass anything you want, i.e. 'App Component'
