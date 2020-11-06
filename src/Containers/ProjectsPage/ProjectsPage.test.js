import { shallow } from 'enzyme';
import { findByAttr } from'../../testUtils/testUtils';
import ProjectsPage from './ProjectsPage';
import ProjectCard from './ProjectCard/ProjectCard';

describe('ProjectsPage', () => {
   
    const wrapper = shallow(<ProjectsPage/>)
    test('renders w/ error', () => {
        expect(findByAttr(wrapper,"component-project-card")).toHaveLength(1);
    })
    test('renders cards equal to projects listed in state', () => {
        expect(wrapper.find(ProjectCard)).toHaveLength(wrapper.state().projects.length)
    })

    

})