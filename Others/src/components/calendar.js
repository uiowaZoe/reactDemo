/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */


import React from 'react';
// import ReactDOM from 'react-dom';
// import Calendar from  'rc-calendar';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';

// import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

import '../Assets/css/calendar.css';

const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY-MM-DD dddd';
// const cn = location.search.indexOf('us') !== -1;

const now = moment();

 now.locale('en-gb').utcOffset(0);


class Picker extends React.Component {
  state = {
    hoverValue: [],
  };

  onHoverChange = (hoverValue) => {
   
    this.setState({ hoverValue });
  }

  render() {
    const props = this.props;
    const { showValue } = props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        locale={enUS}
        defaultValue={now}
        format={format}
        onChange={props.onChange}
        disabledDate={props.disabledDate}
      />);
    return (
      <DatePicker
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
        calendar={calendar}
        value={props.value}
      >
        {
          () => {
            return (
              <span>
                <input
                  placeholder="请选择日期"
                  style={{ width: 250 }}
                  readOnly
                  value={showValue && showValue.format(fullFormat) || ''}
                />
                </span>
            );
          }
        }
      </DatePicker>);
  }
}

class Demo extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    startOpen: false,
    endOpen: false,
  };

  onStartOpenChange = (startOpen) => {
    this.setState({
      startOpen,
    });
  }

  onEndOpenChange = (endOpen) => {
    this.setState({
      endOpen,
    });
  }

  onStartChange = (value) => {
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true,
    });
  }

  onEndChange = (value) => {
    this.setState({
      endValue: value[1],
    });
  }

  disabledStartDate = (endValue) => {
    if (!endValue) {
      return false;
    }
    const startValue = this.state.startValue;
    if (!startValue) {
      return false;
    }
    return endValue.diff(startValue, 'days') < 0;
  }

  render() {
    const state = this.state;
    return (
      <div style={{ width: 240, margin: 20 }} className='calendar-area'>
        <p>
          开始时间：
          <Picker
            onOpenChange={this.onStartOpenChange}
            type="start"
            showValue={state.startValue}
            open={this.state.startOpen}
            value={[state.startValue, state.endValue]}
            onChange={this.onStartChange}
          />
        </p>

        <p>
          结束时间：
          <Picker
            onOpenChange={this.onEndOpenChange}
            open={this.state.endOpen}
            type="end"
            showValue={state.endValue}
            disabledDate={this.disabledStartDate}
            value={[state.startValue, state.endValue]}
            onChange={this.onEndChange}
          />
        </p>
      </div>);
  }
}


export default Demo;