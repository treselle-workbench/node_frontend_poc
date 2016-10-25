node {
	stage 'Git Checkout'
		git url: 'https://github.com/treselle-workbench/node_frontend_poc.git'
	stage 'Build Docker Image'
		sh "sudo docker build -t node_frontend ."
	stage 'Run Docker Container'
		sh "sudo docker run --name node_frontend_poc -p 3004:3004 -d node_frontend"
}