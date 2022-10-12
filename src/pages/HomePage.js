import React from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { getContacts, deleteContact } from "../utils/api";

const HomePageWrapper = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSeacrhParams({ keyword });
  };

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async onDeleteHandler(id) {
    await deleteContact(id);

    // update the contact state from api.js
    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  // keywordChange
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  // getContact from Api
  async componentDidMount() {
    const { data } = await getContacts();

    this.setState(() => {
      return {
        contacts: data,
      };
    });
  }

  render() {
    // Filter contact
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase());
    });

    return (
      <section>
        <h2>Daftar Kontak</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;
