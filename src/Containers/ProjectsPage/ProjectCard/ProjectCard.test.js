import { shallow } from 'enzyme';
import { findByAttr } from '../../../testUtils/testUtils';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
    const projectTitle = "madame-mimi's"
    const wrapper = shallow(<ProjectCard title={projectTitle}/>)
    test('renders w/ error', () => {
        expect(wrapper.find('[data-test="component-project-card"]')).toHaveLength(1);
    })

    test('displays image equal to correct image in state', () => {
        expect(findByAttr(wrapper, 'card-image').at(0).props().src).toEqual(wrapper.state().projects[projectTitle].thumb)
    })

    // describe('on mouseover', () => {
    //     beforeEach(() => {
    //         wrapper.simulate('mouseenter')
    //     })
    //     test('displays header equal to correct header in state', () => {
    //         expect(wrapper.find(findByAttr(wrapper, 'card-header').text())).toEqual(wrapper.state().projects[projectTitle])
    //     })
    //     test('displays description equal to correct description in state', () => {
    //         expect(wrapper.find(findByAttr(wrapper, 'card-description').text())).toEqual(wrapper.state().projects[projectTitle])
    //     })
    //     test('displays details equal to correct details in state', () => {
    //         expect(wrapper.find(findByAttr(wrapper, 'card-details').text())).toEqual(wrapper.state().projects[projectTitle])
    //     })
    // })
})