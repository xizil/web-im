import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { connect } from "react-redux"
import BlacklistActions from "@/redux/BlacklistRedux"
import { I18n } from "react-redux-i18n"
import _ from "lodash"
import "./style/BlacklistModal.less"

class BlacklistModal extends React.Component {
	state = {
		name: "",
		screen: 1
	}

	render() {
		const { blacklist, doRemoveBlacklist } = this.props
		const items = blacklist.names.map((name, index) => {
			return (
				<p key={name}>
					{name}
					<i
						style={{
							cursor: "pointer"
						}}
						className="fr iconfont icon-circle-minus"
						onClick={() => {
							doRemoveBlacklist(name)
						}}
					/>
				</p>
			)
		})

		return (
			<div className="x-blacklist">
				<div className="x-blacklist-members">
					{items}
				</div>
			</div>
		)
	}
}

export default connect(
	({ entities }) => ({
		blacklist: entities.blacklist
	}),
	dispatch => ({
		doRemoveBlacklist: options =>
			dispatch(BlacklistActions.doRemoveBlacklist(options))
	})
)(BlacklistModal)
