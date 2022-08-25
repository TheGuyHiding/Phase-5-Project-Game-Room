class LeaderboardsController < ApplicationController
    def index
        render json: Leaderboard.all
    end

    def show
        leader = Leaderboard.find(params[:id])
        render json: leader, include: :users, :game
    end
    
    def create
        leader = Leaderboard.create(leader_params)
        render json: leader, status: :created
    end

    def update
        leader = Leaderboard.find_by(id: params[:id])
        if leader
            leader.update(leader_params)
            render json: leader
        else
            render json: { error: "Leaderboard not found" }, status: :not_found
        end
    end

    
    def destroy
        leader = Leaderboard.find_by(id: params[:id])
        if leader
            leader.destroy
            head :no_content
        else
            render json: { error: "Leaderboard not found" }, status: :not_found
        end
    end

    private

    def leader_params
        params.permit(:plyer, :score, :game_id, :user_id)
    end
end
