import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class Detailspg7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ["React", "Node js"],
      colleges: [],
      newCollege: {
        name: "",
        startDate: "",
        endDate: "",
        address: "",
      },
      workExperiences: [],
      newWorkExperience: {
        company: "",
        startDate: "",
        endDate: "",
        address: "",
      },
    };
    this.inputRef = React.createRef();
  }

  removeSkill = (i) => {
    const skills = this.state.skills.slice();
    skills.splice(i, 1);
    this.setState({
      skills: skills,
    });
  };

  addSkill = (e) => {
    const skills = this.state.skills.slice();
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      if (skills.find((skill) => skill.toLowerCase() === value.toLowerCase())) {
        return alert("No duplicate value allowed");
      }

      skills.push(value);

      this.setState({
        skills,
      });

      this.inputRef.current.value = null;
    } else if (e.key === "Backspace" && !value) {
      this.removeSkill(skills.length - 1);
    }
  };

  handleCollegeInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      newCollege: {
        ...this.state.newCollege,
        [name]: value,
      },
    });
  };

  handleWorkExperienceInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      newWorkExperience: {
        ...this.state.newWorkExperience,
        [name]: value,
      },
    });
  };

  addCollege = () => {
    const { name, startDate, endDate, address } = this.state.newCollege;
    if (!name || !startDate || !endDate || !address) {
      alert("Please fill in all fields for education.");
      return;
    }
    this.setState({
      colleges: [...this.state.colleges, this.state.newCollege],
      newCollege: {
        name: "",
        startDate: "",
        endDate: "",
        address: "",
      },
    });
  };

  addWorkExperience = () => {
    const { company, startDate, endDate, address } =
      this.state.newWorkExperience;
    if (!company || !startDate || !endDate || !address) {
      alert("Please fill in all fields for work experience.");
      return;
    }
    this.setState({
      workExperiences: [
        ...this.state.workExperiences,
        this.state.newWorkExperience,
      ],
      newWorkExperience: {
        company: "",
        startDate: "",
        endDate: "",
        address: "",
      },
    });
  };

  handleAddSkill = () => {
    const { skills } = this.state;
    const newSkill = this.inputRef.current.value.trim();

    if (newSkill) {
      if (
        skills.some((skill) => skill.toLowerCase() === newSkill.toLowerCase())
      ) {
        alert("No duplicate value allowed");
        return;
      }
      this.setState((prevState) => ({
        skills: [...prevState.skills, newSkill],
      }));

      this.inputRef.current.value = "";
    }
  };

  deleteCollege = (index) => {
    const updatedColleges = [...this.state.colleges];
    updatedColleges.splice(index, 1);
    this.setState({ colleges: updatedColleges });
  };

  deleteWorkExperience = (index) => {
    const updatedWorkExperiences = [...this.state.workExperiences];
    updatedWorkExperiences.splice(index, 1);
    this.setState({ workExperiences: updatedWorkExperiences });
  };

  render() {
    const { skills, colleges, newCollege, workExperiences, newWorkExperience } =
      this.state;

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Account Security</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit
        </p>
        <div className="border border-gradient rounded-md p-4 mt-8">
          {/* Education */}
          <div className="mb-6">
            <label htmlFor="role" className="text-xl md:w-1/4 mb-2 block">
              What is your role :
            </label>
            <input
              id="role"
              type="text"
              placeholder="Ex : UX designer"
              className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 w-full md:w-3/4"
            />
          </div>
          {/* Your Areas of Interest : */}
          <div className="mb-6">
            <label htmlFor="skills" className="text-xl md:w-1/4 mb-2 block">
              Your Areas of Interest :
            </label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-800 text-white rounded-md flex items-center px-3 py-1"
                >
                  {skill}
                  <button
                    onClick={() => this.removeSkill(i)}
                    className="ml-2 bg-red-500 text-white rounded-full p-1"
                  >
                    -
                  </button>
                </div>
              ))}
              <div className="input-skill flex">
                <input
                  onKeyDown={this.addSkill}
                  type="text"
                  size="4"
                  ref={this.inputRef}
                  placeholder="Add skill..."
                  className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 w-full md:w-96"
                />
                <button
                  onClick={this.handleAddSkill}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Your qualification : */}
          <div className="mb-6">
            <label
              htmlFor="qualification"
              className="text-xl md:w-1/4 mb-2 block"
            >
              Your qualification :
            </label>
            <input
              id="qualification"
              type="text"
              placeholder="Ex : Btech"
              className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 w-full md:w-3/4"
            />
          </div>
          {/* Education */}
          <div>
            <label
              htmlFor="qualification"
              className="text-xl md:w-1/4 mb-2 block mt-4"
            >
              Education
            </label>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">College Name</th>
                    <th className="px-4 py-2">Start Date</th>
                    <th className="px-4 py-2">End Date</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((college, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{college.name}</td>
                      <td className="border px-4 py-2">{college.startDate}</td>
                      <td className="border px-4 py-2">{college.endDate}</td>
                      <td className="border px-4 py-2">{college.address}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => this.deleteCollege(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="name"
                        value={newCollege.name}
                        onChange={this.handleCollegeInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                        placeholder="Enter College Name"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        name="startDate"
                        value={newCollege.startDate}
                        onChange={this.handleCollegeInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        name="endDate"
                        value={newCollege.endDate}
                        onChange={this.handleCollegeInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="address"
                        value={newCollege.address}
                        onChange={this.handleCollegeInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                        placeholder="Enter Address"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={this.addCollege}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <label
              htmlFor="qualification"
              className="text-xl md:w-1/4 mb-2 block mt-4"
            >
              Work Experience
            </label>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Company</th>
                    <th className="px-4 py-2">Start Date</th>
                    <th className="px-4 py-2">End Date</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {workExperiences.map((experience, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{experience.company}</td>
                      <td className="border px-4 py-2">
                        {experience.startDate}
                      </td>
                      <td className="border px-4 py-2">{experience.endDate}</td>
                      <td className="border px-4 py-2">{experience.address}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => this.deleteWorkExperience(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="company"
                        value={newWorkExperience.company}
                        onChange={this.handleWorkExperienceInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                        placeholder="Enter Company Name"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        name="startDate"
                        value={newWorkExperience.startDate}
                        onChange={this.handleWorkExperienceInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        name="endDate"
                        value={newWorkExperience.endDate}
                        onChange={this.handleWorkExperienceInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="address"
                        value={newWorkExperience.address}
                        onChange={this.handleWorkExperienceInputChange}
                        className="bg-transparent border-b outline-none border-gray-300 rounded-md py-1 px-2 w-full"
                        placeholder="Enter Address"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={this.addWorkExperience}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* {Personal Website :?} */}
          <div>
            <label
              htmlFor="qualification"
              className="text-xl md:w-1/4 mb-2 block mt-4"
            >
              Personal Website
            </label>
            <input
              id="qualification"
              type="text"
              placeholder="Ex : www.yourwebsite.com"
              className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 w-full md:w-3/4"
            />
          </div>
          <div className="flex justify-center lg:justify-end mt-6 m-6">
            <button
              className="bg-white text-black px-3 py-2"
              onClick={() => navigate("/detailspg6")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Detailspg7;
