import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  
  beforeEach(() => {
    component = renderComponent(CommentBox); // jQuery wrapped version of the component
  })

  it('has the correct clas', () => {
    expect(component).to.have.class('comment-box');
  })
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', () => {
    expect(component.find('button')).to.exist; 
  });
})