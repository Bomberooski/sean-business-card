import React from 'react';

class EmailButton extends React.Component {
  sendEmail = () => {
    const { email } = this.props;
    const subject = 'Email Subject';
    const body = 'Hello, I would like to contact you...';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  render() {
    const { className } = this.props;

    return (
      <button type="button" id="button" className={className} onClick={this.sendEmail}>
        Email
      </button>
    );
  }
}

export default EmailButton;