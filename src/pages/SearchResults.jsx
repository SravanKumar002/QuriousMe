import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import search from "../assets/icons/search.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const suggested = [
  "figma",
  "Web Development",
  "Website Designing",
  "Wordpress",
  "Data Entry",
  "Marketing",
];

class SearchResult extends Component {
  state = {
    searchInput: "",
    usersDetailsList: [],
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  componentDidMount() {
    this.getdetails();
  }

  getdetails = async () => {
    try {
      const res = await axios.get(
        `https://backend-1h98.onrender.com/api/technical-experts`
      );

      if (res.status === 200) {
        console.log(res.data);
        const updatedDetails = res.data.map((eachOne) => ({
          image: eachOne.image,
          profilePic: eachOne.profile_pic,
          name: eachOne.username,
          desc: eachOne.desc,
          expertise: eachOne.expertise,
          experience: eachOne.experience,
          avgWaitingTime: eachOne.avg_waiting_time,
          rating: eachOne.rating,
          startPrice: eachOne.startprice,
        }));

        this.setState({
          usersDetailsList: updatedDetails,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );

    return (
      <>
        <div>
          <div className="absolute right-[350px] top-[180px] flex gap-3 items-start">
            <div className="flex items-center my-4 w-[500px] bg-[#D9D9D9] rounded-full px-2 py-1.5">
              <input
                type="text"
                placeholder="Search for expertise"
                className="outline-none px-3 bg-[#D9D9D9] text-xl w-full text-black"
                onChange={this.onChangeSearchInput}
              />
              <div className="flex items-center justify-center bg-black left-shadow rounded-full p-1.5">
                <img src={search} className="relative h-8 w-8 top-1" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff5c] py-5 px-7 flex gap-10 items-center">
            <p>Suggested:</p>
            {suggested.map((e, i) => (
              <p key={i} className="px-2 py-1.5 border-2 border-yellow-300">
                {e}
              </p>
            ))}
          </div>
          <div className="flex justify-between p-10">
            <div>
              <h1 className="text-xl">
                Results for <span className="font-semibold">UI UX Design</span>
              </h1>
              <p className="text-[#C1C1C1] text-sm mt-1">250+ results</p>
            </div>
          </div>
          <div className="grid grid-cols-4 mx-7 gap-10">
            {searchResults.map((user) => (
              <Link to="/profile" key={user.name}>
                <div>
                  <img src={user.image} className="" alt="" />
                  <div className="flex gap-3 items-center">
                    <img
                      src={user.profilePic}
                      className="h-10 rounded-full my-2"
                      alt=""
                    />
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <p>{user.desc}</p>
                  <p className="text-sm text-red-500 font-sans">
                    {user.expertise}
                  </p>
                  <div className="flex gap-3 items-center">
                    <StarRatings
                      rating={user.rating}
                      numberOfStars={5}
                      starRatedColor="#FFC107"
                      starDimension="15px"
                      starSpacing="3px"
                    />
                    <p className="relative top-0.5 text-[#FFC107] font-semibold">
                      exp ({user.experience})
                    </p>
                  </div>
                  <p className="text-lg font-semibold">
                    Price ₹ {user.startPrice} /-
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
