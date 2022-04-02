require './app.rb'
require "rack/handler/puma"
run Sinatra::Application
