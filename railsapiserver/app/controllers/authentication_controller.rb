class AuthenticationController < ApplicationController
    before_action :set_user, only: %i[ login register logout ]



def login
    user = User.find_by(email: params[:email])

    if user && user.password == param[:password]
        token = encode_user_data({user_data: user.id})
        render json: {token:token}
    else
        render json: {message: "incalid credentials"}
        
    end
end


def register
    user = User.new(username: param[:username], email: param[:email], password: param[:password])
    if user.save
        token = encode_user_data({user_data: user.id})

        render json: { token: token }
    else
      render json: { message: "invalid credentials" }
end



end
