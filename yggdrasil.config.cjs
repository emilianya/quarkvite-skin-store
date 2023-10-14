module.exports = {
	apps : [{
		name: `quarkvite-skin-store-dev`,
		script: 'npm run start',
		env_dev: {
			QS_ENV: "dev",
			NODE_ENV: "production"
		}
	},{
		name: `quarkvite-skin-store-prod`,
		script: 'npm run start',
		env_production: {
			QS_ENV: "prod",
			NODE_ENV: "production"
		}
	}],
	// Deployment Configuration
	deploy : {
		qvssdev : {
			"user" : "q2",
			"host" : ["cirno.yggdrasil.cat"],
			"ref"  : "origin/kojirou",
			"repo" : "git@github.com:emilianya/quarkvite-skin-store.git",
			"path" : "/home/q2/qvssdev",
			"post-deploy" : "yarn install && pm2 startOrRestart yggdrasil.config.cjs --only quarkvite-skin-store-dev --env dev"
		},
		qvssprod : {
			"user" : "q2",
			"host" : ["cirno.yggdrasil.cat"],
			"ref"  : "origin/senpai",
			"repo" : "git@github.com:emilianya/quarkvite-skin-store.git",
			"path" : "/home/q2/qvssprod",
			"post-deploy" : "yarn install && pm2 startOrRestart yggdrasil.config.cjs --only quarkvite-skin-store-prod --env production"
		}
	}
};