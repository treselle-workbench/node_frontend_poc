node {
	stage 'Git Checkout'
		git url: 'https://github.com/treselle-workbench/node_frontend_poc.git'
	stage 'Build Docker Image'
		sh "sudo docker build -t node_frontend ."
	stage 'Run Docker Container'
		sh "sudo docker run --name node_frontend -p 3005:3005 -d node_frontend"
}