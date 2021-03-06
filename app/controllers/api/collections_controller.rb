class Api::CollectionsController < ApplicationController
   def index
        @collections = current_user.collections
        render "api/collections/index"
    end

    def create
        @collection = Collection.new(collection_params)
        @collection.user_id ||= current_user.id
        if @collection.save!
            render "api/collections/show"
        else
            render json: @collections.errors.full_messages, status: 422
        end
    end

    def update
        @collection = current_user.collections.find(params[:id])
        @collection.user_id ||= current_user.id
        if @collection.update_attributes(collection_params)
            render "/api/collections/show"
        else
            render json: @collections.errors.full_messages, status: 422
        end
    end

    def destroy
        @collection = Collection.find(params[:id])
        @collection.destroy
    end

    private

    def collection_params
        params.require(:collection).permit(:title, :user_id)
    end
end
