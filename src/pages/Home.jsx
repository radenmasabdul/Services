/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";

import { connect } from "react-redux";
import { fetchServices } from "actions";

import Hero from "components/Hero";
import ServiceItem from "components/services/ServiceItem";

class Home extends React.Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.props.dispatch(fetchServices());
  }

  renderServices = (services) =>
    services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));

  render() {
    const { services } = this.props;
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">
                With great Responsability
              </h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">{this.renderServices(services)}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ services: state.service.items });

export default connect(mapStateToProps)(Home);
