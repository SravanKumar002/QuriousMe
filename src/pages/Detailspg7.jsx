import React, { Component } from "react";

class Detailspg7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ["React", "Node js"],
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

  render() {
    const { skills } = this.state;

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Account Security</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit
        </p>
        <div className="border border-gradient rounded-md p-4 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <label htmlFor="role" className="text-xl md:w-1/4 mb-2">
              What is your role :
            </label>
            <input
              id="role"
              type="text"
              placeholder="Ex : UX designer"
              className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 md:w-3/4"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <label htmlFor="skills" className="text-xl md:w-1/4 mb-2">
              Your Areas of Interest :
            </label>
            <div className="flex flex-wrap gap-2 md:w-3/4">
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
              <div className="input-skill">
                <input
                  onKeyDown={this.addSkill}
                  type="text"
                  size="4"
                  ref={this.inputRef}
                  placeholder="Add skill..."
                  className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 w-full md:w-96"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <label htmlFor="qualification" className="text-xl md:w-1/4 mb-2">
              Your qualification :
            </label>
            <input
              id="qualification"
              type="text"
              placeholder="Ex : Btech"
              className="bg-transparent border-b outline-none border-gray-300 rounded-md py-2 px-4 md:w-3/4"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Detailspg7;
