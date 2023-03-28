CREATE TABLE [dbo].[Customer] (
    [Id]      INT            IDENTITY (1, 1) NOT NULL,
    [Name]    NVARCHAR (50)  NULL,
    [Email]   NVARCHAR (50)  NULL,
    [Phone]   NVARCHAR (20)  NULL,
    [Address] NVARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

