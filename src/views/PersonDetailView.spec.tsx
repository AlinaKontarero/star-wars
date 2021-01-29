import React from 'react';
import PersonDetailsView from './PersonDetailsView';

const mockfn = jest.fn();

describe('<PersonalDetailView {...props} />', () => {
  let wrapper: any;
  let store: any;
  
  const mockPerson = {
    birth_year: "41.9BBY",
    created: "2014-12-10T16:20:44.310000Z",
    edited: "2014-12-20T21:17:50.327000Z",
    eye_color: "blue",
    films: ["http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"],
    gender: "male",
    hair_color: "blond",
    height: "188",
    homeworld: "http://swapi.dev/api/planets/1/",
    mass: "84",
    name: "Anakin Skywalker",
    skin_color: "fair",
    species: [],
    starships: ["http://swapi.dev/api/starships/39/", "http://swapi.dev/api/starships/59/", "http://swapi.dev/api/starships/65/"],
    url: "http://swapi.dev/api/people/11/",
    vehicles: ["http://swapi.dev/api/vehicles/44/", "http://swapi.dev/api/vehicles/46/"],
  }

  const mockFilms = [
    {title: "A New Hope", url: "http://swapi.dev/api/films/1/"},
    {title: "The Empire Strikes Back", url: "http://swapi.dev/api/films/2/"},
    {title: "Return of the Jedi", url: "http://swapi.dev/api/films/3/"},
    {title: "Attack of the Clones", url: "http://swapi.dev/api/films/5/"},
    {title: "Revenge of the Sith", url: "http://swapi.dev/api/films/6/"}
]

  const props: any = {
    person: mockPerson,
    onClose: mockfn,
    films: mockFilms
  };
  
  beforeEach(() => {
    wrapper = shallow(<PersonDetailsView {...props} />);
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  
  // describe('defines user form fields', () => {
  //   it('renders user name field', () => {
  //     const userNameField = wrapper.find('[name="userName"]');

  //     expect(userNameField.prop('type')).toBe('text');
  //     expect(userNameField.prop('label')).toBe('Name *');
  //     expect(userNameField.prop('placeHolder')).toBe('Enter User Name');
  //   });

  //   it('renders user dob field', () => {
  //     const userDOBField = wrapper.find('[name="userDOB"]');
      
  //     expect(userDOBField.prop('type')).toBe('date');
  //     expect(userDOBField.prop('label')).toBe('DOB *');
  //     expect(userDOBField.prop('placeHolder')).toBe('Enter Date of Birth');
  //   });

  //   it('renders user age field', () => {
  //     const userAgeField = wrapper.find('[name="userAge"]');
      
  //     expect(userAgeField.prop('type')).toBe('text');
  //     expect(userAgeField.prop('label')).toBe('Age *');
  //     expect(userAgeField.prop('placeHolder')).toBe('Enter User Age');
  //   });

  //   it('renders gender field', () => {
  //     const genderField = wrapper.find('[name="userGender"]');
      
  //     expect(genderField.prop('type')).toBe('text');
  //     expect(genderField.prop('label')).toBe('Gender *');
  //     expect(genderField.prop('placeHolder')).toBe('Select Gender');
  //   });

  //   it('renders mobile number field', () => {
  //     const mobileNumberField = wrapper.find('[name="userMobileNumber"]');
      
  //     expect(mobileNumberField.prop('type')).toBe('text');
  //     expect(mobileNumberField.prop('label')).toBe('Mobile No *');
  //     expect(mobileNumberField.prop('placeHolder')).toBe('Enter Mobile Number');
  //   });

  //   it('renders address field', () => {
  //     const addressField = wrapper.find('[name="userAddress"]');
      
  //     expect(addressField.prop('type')).toBe('textarea');
  //     expect(addressField.prop('label')).toBe('Address *');
  //     expect(addressField.prop('placeHolder')).toBe('Enter Address');
  //   });
    
  //   it('renders next button', () => {
  //     const nextButton = wrapper.find('Button').dive();
  //     expect(nextButton.prop('type')).toBe('submit');
  //     expect(nextButton.text()).toEqual('Next <FaChevronRight />');
  //   });
  // });
});