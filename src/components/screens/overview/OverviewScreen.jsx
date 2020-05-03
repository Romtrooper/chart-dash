import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Pie, HorizontalBar } from 'react-chartjs-2';
import {
	Spin,
	Divider,
	Typography,
} from 'antd';

import ChartTemplate from '../../templates/chart/ChartTemplate';
import ContentLayout from '../../layouts/content/ContentLayout';

import {
	barData,
	barOptions,
	horizBarData,
	horizBarOptions,
	dougData,
	pieData,
} from './config';

const { Title } = Typography;


export default class OverviewScreen extends React.Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		keyNumbers: PropTypes.array.isRequired,
		dataText: PropTypes.object.isRequired,
		fetchDatas: PropTypes.func.isRequired,
		loaded: PropTypes.bool.isRequired,
	}

	componentDidMount() {
		this.props.fetchDatas();
	}

	render() {
		const {
			dataText,
			keyNumbers,
			data,
			loaded,
		} = this.props;

		const {
			textCampaigns,
			textAds,
			textAdgroups,
			textKeywords,
		} = dataText;


		if (!loaded) {
			return <Spin size='large' />;
		}

		return (
			<ContentLayout title={dataText.title}>

				<Title level={2}>{dataText.detailTitle}</Title>

				<Divider orientation='left'>
					<Title level={3}>{textCampaigns.title}</Title>
				</Divider>
				<ChartTemplate
					infoTitle={textCampaigns.content}
					tooltip={`${textCampaigns.tooltip}${textCampaigns.tooltip2}`}
					dataSource={[
						`${keyNumbers[0][0]}${textCampaigns.clicks}`,
						`${textCampaigns.average}${keyNumbers[0][1]}`,
						`${textCampaigns.bestName}${data.campaigns.data[0].Campaign} (${data.campaigns.data[0].Clicks}${textCampaigns.clicks})`,
					]}
				>
					<HorizontalBar
						data={barData(data.campaigns.labels, 'Campaigns', data.campaigns.dataSet)}
						options={horizBarOptions}
					/>
				</ChartTemplate>

				<Divider orientation='left'>
					<Title level={3}>{textAdgroups.title}</Title>
				</Divider>
				<ChartTemplate
					infoTitle={textAdgroups.content}
					tooltip={textAdgroups.tooltip}
					dataSource={[
						`${keyNumbers[1][0]}${textAdgroups.clicks}`,
						`${textAdgroups.average}${keyNumbers[1][1]}`,
						`${textAdgroups.bestName}${data.adgroups.data[0]['Ad group']} (${data.adgroups.data[0].Clicks}${textAdgroups.clicks})`,
					]}
				>
					<Doughnut data={dougData(data.adgroups.labels, data.adgroups.dataSet)} />
				</ChartTemplate>

				<Divider orientation='left'>
					<Title level={3}>{textAds.title}</Title>
				</Divider>
				<ChartTemplate
					infoTitle={textAds.content}
					tooltip={`${textAds.tooltip}${textAds.tooltip2}`}
					dataSource={[
						`${keyNumbers[2][0]}${textAds.clicks}`,
						`${textAds.average}${keyNumbers[2][1]}`,
						`${textAds.bestName}${data.ads.data[0]['Headline 2']} (${data.ads.data[0].Clicks}${textAds.clicks})`,
					]}
				>
					<HorizontalBar data={horizBarData(data.ads.labels, 'Ads', data.ads.dataSet)} options={barOptions} />
				</ChartTemplate>

				<Divider orientation='left'>
					<Title level={3}>{textKeywords.title}</Title>
				</Divider>
				<ChartTemplate
					infoTitle={textKeywords.content}
					tooltip={`${textKeywords.tooltip}${textKeywords.tooltip2}`}
					dataSource={[
						`${keyNumbers[3][0]}${textKeywords.clicks}`,
						`${textKeywords.average}${keyNumbers[3][1]}`,
						`${textKeywords.bestName}${data.keywords.data[0].Keyword} (${data.keywords.data[0].Clicks}${textKeywords.clicks})`,
					]}
				>
					<Pie data={pieData(data.keywords.labels, data.keywords.dataSet)} />
				</ChartTemplate>
			</ContentLayout>
		);
	}
}
