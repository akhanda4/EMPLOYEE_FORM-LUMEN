import React, { PureComponent } from "react";

import JqxInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxinput";
import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput";
import JqxDropDownList from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist";
import JqxComboBox from "jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox";
import JqxTextArea from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea";
import JqxRadioButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton";
import JqxFileUpload from "jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload";
import JqxEditor from "jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor";
import JqxCheckBox from "jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox";
import JqxButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons";
import JqxFormattedInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput";
import JqxNotification from "jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification";
import Aggrid from "./Aggrid.js";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";
import "jqwidgets-scripts/jqwidgets/styles/jqx.dark.css";
import "./layout.css";
import $ from "jquery";
/**
 *
 */
class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua & Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia & Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "China - Hong Kong / Macau",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, Democratic Republic of (DRC)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "France",
        "French Guiana",
        "Gabon",
        "Gambia, Republic of The",
        "Georgia",
        "Germany",
        "Ghana",
        "Great Britain",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Israel and the Occupied Territories",
        "Italy",
        "Ivory Coast (Cote d'Ivoire)",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Korea, Democratic Republic of (North Korea)",
        "Korea, Republic of (South Korea)",
        "Kosovo",
        "Kuwait",
        "Kyrgyz Republic (Kyrgyzstan)",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar/Burma",
        "Namibia",
        "Nepal",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia, Republic of",
        "Norway",
        "Oman",
        "Pacific Islands",
        "Pakistan",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovak Republic (Slovakia)",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Netherlands",
        "Timor Leste",
        "Togo",
        "Trinidad & Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks & Caicos Islands",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United States of America (USA)",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (UK)",
        "Virgin Islands (US)",
        "Yemen,",
        "Zambia",
        "Zimbabwe"
      ],
      hobbies: ["Sports", "Reading", "Traveling", "Music"],
      experience: ["< 1 year", "2 - 3 years", " > 3 years"],
      languages: ["HTML and CSS", "Javascript", "React"],
      value: "Default",
      updating: false,
      updatindID: ""
    };
  }
  editEmployeeData = data => {
    this.reset();
    this.setState({
      updatindID: data._id
    });
    this.setState({
      updating: true
    });

    this.refs.first_name.val(data.first_name);
    this.refs.last_name.val(data.last_name);
    this.refs.dob.val(data.dob);
    this.refs.phone.val(data.phone);
    this.refs.country.selectItem(data.country);
    let hobbies = data.hobbies.split(",");
    for (let i = 0; i < hobbies.length; i++) {
      this.refs.hobbies.checkItem(hobbies[i]);
    }
    this.refs.address.val(data.address);
    this.refs.working_experience.val(data.working_experience);
    if (data.status === "unMarried") {
      this.refs.status_U.check();
    } else {
      this.refs.status_M.check();
    }
    let languages = data.languages.split(",");
    for (let i = 0; i < languages.length; i++) {
      this.refs.languages.checkItem(languages[i]);
    }
    this.refs.editor.val(data.reasonsForHire);
    if (data.terms === "true") {
      this.refs.t_c.check();
    }
  };
  /**
   * It'll reset all the fields and their values
   */
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    this.refs.country.selectItem("Albania");
    this.refs.working_experience.selectItem("2 - 3 years");
  }
  removeWarning = () => {
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let dob = document.getElementById("dob");
    let phone = document.getElementById("phone");
    let hobbies = document.getElementById("hobbies");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let languages = document.getElementById("languages");
    let terms = document.getElementById("terms");
    /**
     * Disable red color borders for all of the fields
     */
    first_name.style.border = "none";
    last_name.style.border = "none";
    dob.style.border = "none";
    phone.style.border = "none";
    hobbies.style.border = "none";
    address.style.border = "none";
    status.style.border = "none";
    languages.style.border = "none";
    terms.style.border = "none";
  };
  checkJson = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  /**
   * This method is used to validate data and submit it.
   */
  submitForm = () => {
    let x = {
      first_name: "",
      last_name: "",
      dob: "",
      phone: "",
      country: "",
      hobbies: "",
      address: "",
      working_experience: "",
      status: "",
      languages: "",
      reasonsForHire: "",
      terms: ""
    };

    if (!/\S/.test(this.refs.first_name.val())) {
      x.first_name = "";
    } else {
      x.first_name = this.refs.first_name.val().trim();
    }

    if (!/\S/.test(this.refs.last_name.val())) {
      x.last_name = "";
    } else {
      x.last_name = this.refs.last_name.val().trim();
    }

    x.dob = this.refs.dob.val();
    x.phone = this.refs.phone.val();
    x.country = this.refs.country.val();
    let hobbies = this.refs.hobbies.getCheckedItems();
    for (let i = 0; i < hobbies.length; i++) {
      if (i !== hobbies.length - 1) {
        x.hobbies += hobbies[i].value + ", ";
      } else {
        x.hobbies += hobbies[i].value;
      }
    }
    x.address = this.refs.address.val();
    x.working_experience = this.refs.working_experience.val();
    x.status =
      this.refs.status_M.val() === true
        ? "Married"
        : this.refs.status_U.val() === true
        ? "unMarried"
        : "";
    let languages = this.refs.languages.getCheckedItems();

    if (!/\S/.test(this.refs.editor.val())) {
      x.reasonsForHire = "";
    } else {
      x.reasonsForHire = this.refs.editor.val().trim();
    }

    /**
     * checking for validations
     */

    for (let i = 0; i < languages.length; i++) {
      if (i !== languages.length - 1) {
        x.languages += languages[i].value + ", ";
      } else {
        x.languages += languages[i].value;
      }
    }
    x.terms = this.refs.t_c.val() === true ? "true" : "";

    for (var key in x) {
      if ((key === "phone" && x[key] >= 9999999999) || x[key] <= 1000000000) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.switchCheck(key);
        return;
      }
      if (x[key].length < 2) {
        console.log(key);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.switchCheck(key);
        return;
      }
      if (x[key].length < 20 && key === "reasonsForHire") {
        this.switchCheck(key);
        return;
      }
    }
    if (this.state.updating === false) {
      console.log("Adding user");
      $.ajax({
        url: "http://localhost:8000/addEmployee",
        data: x,
        type: "POST",
        success: function(response) {
          if (this.checkJson(response)) {
            response = JSON.parse(response);
          }
          if (response.status === 500) {
            document.getElementById("error_message").innerHTML =
              "Phone number Already exists";
            this.refs.msgNotification.open();
            this.removeWarning();
            document.getElementById("phone").style.border = "2px solid red";
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            });
            return;
          } else {
            document.getElementById("sucess_message").innerHTML =
              "User added Successfully";
            this.refs.msgNotificationSuccess.open();
            this.removeWarning();
            this.refs.ag_grid.fetch_data();
            this.reset();
            window.scrollTo({
              top: 1000,
              left: 0,
              behavior: "smooth"
            });
          }
        }.bind(this),
        error: function(response) {
          console.log(response);
        }
      });
    } else if (this.state.updating === true) {
      console.log("Updating user");
      let updatedX = { ...x };
      updatedX._id = this.state.updatindID;
      console.log(updatedX);

      $.ajax({
        url: "http://localhost:8000/updateEmployee",
        data: updatedX,
        type: "PUT",
        success: function(response) {
          if (response) {
            document.getElementById("sucess_message").innerHTML =
              "User Updated Successfully";
            this.refs.msgNotificationSuccess.open();
            this.removeWarning();
            this.reset();
            this.refs.ag_grid.fetch_data();
            window.scrollTo({
              top: 1000,
              left: 0,
              behavior: "smooth"
            });
            return;
          } else {
            console.log("something is wrong");
          }
        }.bind(this),
        error: function(response) {
          console.log(response);
        }
      });
    }
  };

  /**validations when click submit
   * This function will recieve @param key
   */
  switchCheck = key => {
    if (key === "terms") {
      window.scrollTo({
        top: 300,
        left: 0,
        behavior: "smooth"
      });
    }
    /**
     * Get all the fields by their id's
     */
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let dob = document.getElementById("dob");
    let phone = document.getElementById("phone");
    let hobbies = document.getElementById("hobbies");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let languages = document.getElementById("languages");
    let terms = document.getElementById("terms");

    this.removeWarning();

    switch (key) {
      case "first_name":
        document.getElementById("error_message").innerHTML =
          "Please Enter First name";
        first_name.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "last_name":
        document.getElementById("error_message").innerHTML =
          "Please Enter Last Name";
        last_name.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "dob":
        document.getElementById("error_message").innerHTML =
          "Please Enter Your D.O.B";
        dob.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "phone":
        document.getElementById("error_message").innerHTML =
          "Please Check your phone number";
        phone.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "hobbies":
        document.getElementById("error_message").innerHTML =
          "Please select a hobby";
        hobbies.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "address":
        document.getElementById("error_message").innerHTML =
          "Please Check your Address";
        address.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "status":
        document.getElementById("error_message").innerHTML =
          "Please select your status";
        status.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "languages":
        document.getElementById("error_message").innerHTML =
          "Please select atleast one language";
        languages.style.border = "none";
        this.refs.msgNotification.open();
        break;
      case "reasonsForHire":
        console.log("dasdasdasdasdas");
        document.getElementById("error_message").innerHTML =
          "Please mention few words why should we hire you!";
        this.refs.msgNotification.open();
        break;
      case "terms":
        document.getElementById("error_message").innerHTML =
          "Please accept terms and conditions";
        terms.style.border = "none";
        this.refs.msgNotification.open();
        break;
      default:
        break;
    }

    if (key === "country") {
      return;
    }
    if (key !== "terms" && key !== "status") {
      console.log("it is calling status: " + key);
    }
    if (key === "reasonsForHire") {
      console.log("Please mention few words why should we hire you!");
      return;
    }
    var keyd = document.getElementById(key);
    keyd.style.border = "2px solid red";
  };

  /**
   *This function reset all values after submit and on reset click
   *
   */
  reset = () => {
    this.setState({
      updating: false,
      updatindID: ""
    });
    /**
     * It'll return array of all input fields
     */
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    /**
     * This will return address feild
     */
    let textarea = document.getElementsByTagName("textarea")[0];
    textarea.value = "";
    this.refs.hobbies.uncheckAll();
    this.refs.languages.uncheckAll();
    this.refs.working_experience.selectItem("2 - 3 years");
    this.refs.editor.val(" ");
    this.refs.status_M.uncheck();
    this.refs.status_U.uncheck();
    this.refs.t_c.uncheck();
    this.refs.country.selectItem("Albania");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  cellUpdate = newObj => {
    for (var key in newObj) {
      if (
        (key === "phone" && newObj[key] >= 9999999999) ||
        newObj[key] <= 1000000000
      ) {
        this.switchCheck(key);
        this.removeWarning();
        return;
      }
      if (newObj[key].length < 2) {
        console.log(key);
        this.switchCheck(key);
        this.removeWarning();
        return;
      }
      if (newObj[key].length < 20 && key === "reasonsForHire") {
        this.switchCheck(key);
        this.removeWarning();
        return;
      }
    }
    $.ajax({
      url: "http://localhost:8000/updateEmployee",
      data: newObj,
      type: "PUT",
      success: function(response) {
        if (response) {
          document.getElementById("sucess_message").innerHTML =
            "User Updated Successfully";
          this.refs.msgNotificationSuccess.open();
          this.removeWarning();
          this.reset();
          this.refs.ag_grid.fetch_data();
          window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
          });
          return;
        } else {
          console.log("something is wrong");
        }
      }.bind(this),
      error: function(response) {
        console.log(response);
      }
    });
  };
  render() {
    return (
      <Auxiliary>
        <JqxNotification
          ref={"msgNotification"}
          width={250}
          position={"top-right"}
          opacity={0.9}
          autoOpen={false}
          autoClose={true}
          animationOpenDelay={800}
          autoCloseDelay={3000}
          template={"error"}
        >
          <div id="error_message">Welcome to our website.</div>
        </JqxNotification>
        <JqxNotification
          ref={"msgNotificationSuccess"}
          width={250}
          position={"top-right"}
          opacity={0.9}
          autoOpen={false}
          autoClose={true}
          animationOpenDelay={800}
          autoCloseDelay={3000}
          template={"success"}
        >
          <div id="sucess_message">Updated Successfully.</div>
        </JqxNotification>
        <form className="form">
          <table className="table">
            <tbody>
              <tr>
                <td className="table-data" colSpan="6">
                  <h2>Employee Hiring form</h2>
                </td>
              </tr>
              <tr>
                <td className="table-data" colSpan="3">
                  <JqxInput
                    width={322}
                    height={48}
                    theme={"dark"}
                    placeHolder={"First Name*"}
                    minLength={2}
                    ref="first_name"
                  />
                  <span className="spans_s" id="first_name"></span>
                </td>
                <td className="table-data" colSpan="3">
                  <JqxInput
                    width={322}
                    height={48}
                    theme={"dark"}
                    placeHolder={"Last Name*"}
                    minLength={2}
                    ref="last_name"
                  />
                  <span className="spans_s" id="last_name"></span>
                </td>
              </tr>
              <tr>
                <td className="table-data" colSpan="2">
                  <JqxDateTimeInput
                    width={200}
                    height={48}
                    theme={"dark"}
                    placeHolder={"Date of birth*"}
                    todayString={""}
                    ref="dob"
                  />
                  <span className="spans_s" id="dob"></span>
                </td>
                <td className="table-data" colSpan="2">
                  <JqxFormattedInput
                    width={200}
                    height={48}
                    theme={"dark"}
                    placeHolder={"Phone*"}
                    ref="phone"
                  />
                  <span className="spans_s" id="phone"></span>
                </td>
                <td className="table-data" colSpan="2">
                  <JqxDropDownList
                    width={205}
                    height={48}
                    source={this.state.countries}
                    theme={"dark"}
                    ref="country"
                  />
                  <span className="spans_s" id="country"></span>
                </td>
              </tr>
              <tr>
                <td className="table-data" colSpan="3">
                  <JqxComboBox
                    onCheckChange={this.myComboBoxOnCheckChange}
                    width={320}
                    height={48}
                    source={this.state.hobbies}
                    checkboxes={true}
                    theme={"dark"}
                    placeHolder={"Hobbies*"}
                    ref="hobbies"
                    dropDownHeight={130}
                  />
                  <span className="spans_s" id="hobbies"></span>
                </td>
                <td className="table-data" colSpan="3">
                  <JqxTextArea
                    width={320}
                    height={48}
                    minLength={1}
                    theme={"dark"}
                    valueMember={this.state.value}
                    placeHolder={"Address*"}
                    ref="address"
                  />
                  <span className="spans_s" id="address"></span>
                </td>
              </tr>
              <tr>
                <td className="table-data" colSpan="3">
                  <JqxDropDownList
                    width={320}
                    height={48}
                    source={this.state.experience}
                    selectedIndex={1}
                    theme={"dark"}
                    ref="working_experience"
                    dropDownHeight={100}
                  />
                  <span className="spans_s" id="working_experience"></span>
                </td>
                <td className="table-data" colSpan="3">
                  <JqxFileUpload
                    width={322}
                    height={48}
                    uploadUrl={"imageUpload.php"}
                    fileInputName={"fileToUpload"}
                    onClick={function(event) {
                      event.preventDefault();
                    }}
                    theme={"dark"}
                  />
                </td>
              </tr>
              <tr>
                <td className="table-data status" colSpan="3">
                  <label className="label-1" style={{ display: "flex" }}>
                    <JqxRadioButton
                      width={40}
                      height={"20"}
                      theme={"dark"}
                      ref="status_M"
                    />
                    Married
                  </label>
                  <label className="label-2" style={{ display: "flex" }}>
                    <JqxRadioButton
                      width={40}
                      height={"24"}
                      theme={"dark"}
                      ref="status_U"
                    />
                    Unmarried
                  </label>
                  <span className="spans_s" id="status"></span>
                </td>
                <td className="table-data" colSpan="3">
                  <JqxComboBox
                    onCheckChange={this.myComboBoxOnCheckChange}
                    width={322}
                    height={48}
                    source={this.state.languages}
                    checkboxes={true}
                    theme={"dark"}
                    placeHolder={"Languages*"}
                    ref="languages"
                    dropDownHeight={100}
                  />
                  <span className="spans_s" id="languages"></span>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="table-data reason">
                  <div className="reasons">Why should we hire you!</div>
                </td>
              </tr>
              <tr>
                <td className="table-data" colSpan="6" rowSpan="2">
                  <JqxEditor
                    width={"678"}
                    height={200}
                    theme={"dark"}
                    ref="editor"
                  ></JqxEditor>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td className="table-data" colSpan="6">
                  <label style={{ display: "flex", verticalAlign: "middle" }}>
                    <JqxCheckBox
                      width={40}
                      height={30}
                      theme={"dark"}
                      ref="t_c"
                    />
                    <span className="t-and-c">
                      I accept the Terms and Conditions
                    </span>
                  </label>
                  <span className="spans_s" id="terms"></span>
                </td>
              </tr>
              <tr>
                <td className="table-data btn" colSpan="3">
                  <JqxButton
                    width={310}
                    onClick={this.submitForm}
                    template={"success"}
                    ref="submit"
                  >
                    Submit
                  </JqxButton>
                </td>
                <td className="table-data btn" colSpan="3">
                  <JqxButton
                    width={310}
                    onClick={this.reset}
                    template={"danger"}
                  >
                    Reset
                  </JqxButton>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <Aggrid
          ref="ag_grid"
          editEmployeeData={this.editEmployeeData}
          cellUpdate={this.cellUpdate}
        />
      </Auxiliary>
    );
  }
}
export default Layout;
