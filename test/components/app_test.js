import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/** core parts of a test */
// Use 'describe' to group together similar tests
describe('App', () => {
  let component;
  
  beforeEach(() => {
    component = renderComponent(App);
  })
  // Use 'it' to test a single attribute of a target
  // I am testing something very speciific
  // This is what i'm testing about 'App'
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist
  })  

    // create an instance of App

    // Use 'expect' to make an 'assertion' about a target(App)
    // simple direct assertion about our target

    // expect(component).to.have.class('comment-box')

  
}); // can pass anything you want, i.e. 'App Component'
