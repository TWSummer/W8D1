class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Incorrect username or password"], status: 401
    end
  end


  def destroy
    if current_user
      logout!

    else
      # render json: ["No user to logout!"], status: 404
    end
    render json: {currentUser: nil}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
