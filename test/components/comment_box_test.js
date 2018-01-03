import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox); // jQuery wrapped version of the component
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', () => {
    
  });
})